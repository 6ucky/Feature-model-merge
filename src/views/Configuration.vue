
<template>
 <div>
   <div>
  <label >Please Upload your Feature Model </label>
 <input type="file" @change="processFile($event)">
 </div>
 <!-- <cotalogue ref="cotalogue" :data="data"></cotalogue> -->
    <subcotalogue></subcotalogue>
  </div>
</template>

<script>
import xml2json from '../components/xml2json.js'
import Bus from '../components/bus.js'
import VJstree from 'vue-jstree'
import subcotalogue from './sub_cotalogue.vue'

export default {
  components:{
   subcotalogue,
    VJstree
    },
  name: 'home',
  data () {
    return {
      data: [],
      xml: {},
      simple: [
      {
        label: 'Satisfied customers',
        children: [
          {
            label: 'Good food',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service (disabled node)',
            disabled: true,
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            children: [
              { label: 'Happy atmosphere' },
              { label: 'Good table presentation' },
              { label: 'Pleasing decor' }
            ]
          }
        ]
      }
    ]
    }
  },
  methods: {
    getnewnodeid(){ //get a new nodeID
			let temp = 0;
			for(let i = 0; i < this.data.length; i++)
				temp = this.data[i].data.nodeId > temp ? this.data[i].data.nodeId : temp;
			return temp + 1;
		},
    processFile(event) {
      
      this.initlevel = 0;
      var xmlDoc = '';
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = function(event) {
        //console.log(event.target.result);
        xmlDoc = (new DOMParser()).parseFromString(event.target.result,"text/xml");
        var xmlobject = JSON.parse(xml2json(xmlDoc,''));
        Bus.$emit('getxml',xmlobject);
      };
      reader.readAsText(file);
    },
    insertjstreedata(xml, data){
      let indexlevel = 0;
      for(let key in xml)
      {
        if(key == 'featureModel' || key == 'struct')
        {
          var temp = xml[key];
          this.insertjstreedata(temp, data);
        }
        else if(['alt','or','and', 'feature'].includes(key))
        {
          let tempicon = '';
          if(key === 'alt')
            tempicon = 'fa fa-share-alt';
          if(key === 'or')
            tempicon = '';
          if(Array.isArray(xml[key]))
          {
            for(let i = 0; i < xml[key].length; i++)
            {
              data.push({
              "children": [],
				      "text": xml[key][i]["@name"],
              "mandatory": xml[key][i]["@mandatory"],
              "icon": "fas fa-caret-down fa-3x"
              })
              let temp = xml[key][i];
              this.insertjstreedata(temp, data[i]["children"]);
              indexlevel++;
            }
          }
          else
          {
            data.push({
              "children": [],
				      "text": xml[key]["@name"],
              "mandatory": xml[key]["@mandatory"]
            })
            let temp = xml[key];
            this.insertjstreedata(temp, data[indexlevel]["children"]);
            indexlevel++;
          }
        }
      }
    },
    // inserttreeData(xml,level,parentid,parentindex){
    //   for(let key in xml)
    //   {
    //     if(key == 'featureModel' || key == 'struct')
    //     {
    //       var temp = xml[key];
    //       this.inserttreeData(temp, 1, -1, -1);
    //     }
    //     else if(['alt','or','and', 'feature'].includes(key))
    //     {
    //       if(Array.isArray(xml[key]))
    //       {
    //         for(let i = 0; i < xml[key].length; i++)
    //         {
    //           let newid = this.getnewnodeid();
    //           this.data.push({
    //           children: [],
		// 		      data: {
		// 			    open: true,
		// 			    isSelected: false,
		// 			    level: level,
		// 			    nodeId: newid,
		// 		    	nodeName: xml[key][i]["@name"],
		// 		    	nodeType: 1,
		// 			    //status: xml[key][i]["@abstract"]?0:1,
		// 			    parentId: parentid,
		// 			    contextmenuIndex: 1
		// 		      },
		// 			    numberOfChildren: 0
    //           })
    //           if(parentindex !== -1)
    //             this.data[parentindex].numberOfChildren++;
    //           let temp = xml[key][i];
    //           this.inserttreeData(temp, level+1, newid, this.data.length);
    //         }
    //       }
    //       else
    //       {
    //         let newid = this.getnewnodeid();
    //           this.data.push({
    //           children: [],
		// 		      data: {
		// 			    open: true,
		// 			    isSelected: false,
		// 			    level: level,
		// 			    nodeId: newid,
		// 		    	nodeName: xml[key]["@name"],
		// 		    	nodeType: 1,
		// 			    //status: xml[key]["@abstract"]?0:1,
		// 			    parentId: parentid,
		// 			    contextmenuIndex: 1
		// 		      },
		// 			    numberOfChildren: 0
    //           })
    //           if(parentindex !== -1)
    //             this.data[parentindex].numberOfChildren++;
    //           let temp = xml[key];
    //           this.inserttreeData(temp, level+1, newid, this.data.length);
    //       }
    //     }
    //   }
    // },
    itemClick (node,item) {
          if(item["selected"] === true)
          {
            if(Array.isArray(item["children"]))
            {
              for(let i = 0; i < item["children"].length; i++)
              {
                if(item["children"][i]["mandatory"] !== true && item["children"][i]["selected"] === false)
                {
                  item["children"][i]["selected"] = false;
                }

                  console.log(item["children"][i]["mandatory"]);
              }
            }
            else
            {
              if(item["children"]["mandatory"] !== true && item["children"]["selected"] === false)
                  item["children"]["selected"] = false;
            }
          }
        }
  },
  mounted () {
        Bus.$on('getxml', data => {
          this.xml = data;
          // this.inserttreeData(this.xml, 1, -1, -1);
          this.insertjstreedata(this.xml, this.data);
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfile + label {
    font-size: 1.25em;
    padding: 10px;
    font-weight: 700;
    color: black;
    background-color: white;
    display: inline-block;
    cursor: pointer;
}
.inputfile + label:hover {
    background-color: rgb(0, 140, 255);
}
.inputfile:focus + label {
  outline: 1px dotted #000;
  outline: -webkit-focus-ring-color auto 5px;
}
.xml-tree{
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
