<script>
    import {user, userToken} from '../../Store/store';
    import {addUser, getToken, getUser} from "../../api/user/user"
    import {Link, navigate} from 'svelte-navigator';
    let email;
    let password;
    let username;

    async function signup(){
        let data = {
            userEmail:email,
            userPassword: password,
            userName: username
        }

        let response = await addUser(data)
        console.log("response", response)
        if(response >= 1){
            await handleLogin()
        }else{
            console.log(response)
        }

    }
    async function handleLogin(){
        let data = {
            email: email,
            password: password
        }
        let token = await getToken(data);
        userToken.set(token);
        let userData = await getUser(data);
        user.set(userData);

        if($userToken.token !== null && $user.id !== null ){
            navigate("/main", {replace: true});
        }
        console.log($userToken.token)
        console.log($user);
    }
</script>

<div class="flex justify-center  items-center h-screen">
    <div class="artboard phone-1 horizontal artboard-demo">
        <div class="form-control">
            <input
                type="email"
                placeholder="Email"
                class="input input-info input-bordered"
                bind:value={email}
            />
            <label class="label">
                <span class="label-text-alt">Please enter data</span>
            </label>
        </div>
        <div class="form-control">
            <input
                type="text"
                placeholder="UserName"
                class="input input-info input-bordered"
                bind:value={username}
            />
            <label class="label">
                <span class="label-text-alt">Please enter data</span>
            </label>
        </div>
        <div class="form-control">
            <input
                type="password"
                placeholder="Password"
                class="input input-info input-bordered"
                bind:value={password}
            />
            <label class="label">
                <span class="label-text-alt">Please enter data</span>
            </label>
        </div>
        <div class="form-control">
            <button class="btn btn-sm btn-primary" on:click={signup}>Sign Up</button>
        </div>
        <div class="form-control">
            <a class="link link-accent"><Link to="/signin">Already have an account Login In here</Link></a>
        </div>
    </div>
</div>
