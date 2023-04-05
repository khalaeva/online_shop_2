<template>
    <div class="user_reg">
        <form>
            <h4 class="user_reg__i">Registration</h4>
            <div class="row user_reg__i">
                <div class="col">
                  <label for="Name">Name</label>
                  <input type="text" class="form-control" id="Name">
                </div>
                <div class="col">
                  <label for="Lastname">Lastame</label>
                  <input type="text" class="form-control" id="Lastname">
                </div>
            </div>
            <div class="user_reg__i form-group">
              <label for="Email">Email address</label>
              <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="user_reg__i form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary" style="margin-bottom: 10px">Regist</button>
            <br>
        </form>
    </div>
</template>

<script>
export default {
    name: 'v-user-reg'
}
</script>

<style lang="scss" scoped>
.user_reg{
    margin: auto;
    width: 500px;
    padding: 20px 40px 20px 40px;
    border: 1px solid lightgrey;
    &__i {
        margin-bottom: 20px;
    }
}
</style>