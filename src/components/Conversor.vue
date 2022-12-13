<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-1">Conversor a dolares</h5>
            <form>
              <div class="form-floating mb-3">
                <input
                  v-model="monto"
                  class="form-control"
                />
                <label for="monto">Ingrese monto $</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  v-model="dolar"
                  class="form-control"
                />
                <label for="dolar">Valor en dolar $</label>
              </div>
              <div>
                <p>
                  Valor convertido USD {{ monto / dolar }}
              </p>
              </div>
            </form>

            <p>respuestas:
               1:C
               2:B
               3:C
               4:A
               5:B
               </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      monto: '',
      dolar:''
    }
  },
}
</script>

<style>
</style>