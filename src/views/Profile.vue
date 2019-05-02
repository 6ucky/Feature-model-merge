<template>
  <div>
    <div class="border-bottom text-left"><h1 class="h2">Configuration Actor profile</h1> </div>
   
 
  <div class="hero is-fullheight is-info is-bold">
<div class="text-left">
<div class="row">
  <div class="box">

    <!-- our signup form ===================== -->
    <form id="signup-form">
      <!-- name -->
      <div class="col-sm-3">
        <label for="nom">Name :</label>
        <input type="text" class="" name="name" /><br /> 
      </div>
      </br>
       <!-- surname -->
    
              <div class="col-sm-3"><label for="surnom">Surname :</label><input type="text" class="input" name="surname" /><br />

        
      </div>
      </br>
      <!-- email -->
        <div class="col-sm-3"><label for="mail">Email :</label><input type="email" class="input" name="mail" /><br />

       
      </div>
      </br>
        <div class="col-sm-3">
       <span>Status: {{ selected }}</span>
      <select v-model="selected">
  <option disabled value="">Select</option>
  <option>Expert</option>
  <option>Novice</option>
</select>
</div>
</br>
<div class="col-sm-3">
       <span>Role: {{ selected }}</span>
      <select v-model="selected">
  <option disabled value="">Select</option>
  <option>Engineer</option>
  <option>Product manager</option>
  <option>Saler</option>
  <option>Customer</option>
  <option>User</option>
  

</select>

</div>
 </br> </br>
<div class="col-sm-13">
<label for="regle">Substitution rules :</label> </br>
<input type="checkbox" name="r1" id="r1" />SR1: Most complete product (Full option)</br>
<input type="checkbox" name="r2" id="r2"  />SR2: Simplest product (Minimum of options)<br/>
<input type="checkbox" name="r3" id="r3"  />SR3: Product similar to a past configuration<br/>
<input type="checkbox" name="r4" id="r4"  />SR4: Product configured by a similar profile <br/>
<input type="checkbox" name="r5" id="r5"  />SR5: Prioritize my explicit configuration decisions<br/>
</div>
</br>

      <!-- submit button -->
      <div class="field has-text-right">
        <button type="submit" class="button is-danger">Submit</button>
      </div>
    </form>

  </div>

</div>
</div>
</div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
