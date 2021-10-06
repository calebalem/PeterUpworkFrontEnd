<script>
    import {user, userToken} from '../../Store/store';
    import {getToken, getUser} from "../../api/user/user"
    import {Router, Route, Link, navigate} from 'svelte-navigator';

    let email = "";
    let password = "";

    async function handleLogin(){
        let data = {
            email: email,
            password: password
        }
        let token = await getToken(data);
        userToken.set(token);
        let userData = await getUser(data);
        user.set(userData);

        if($userToken.token !== null && $user.userId !== null ){
            navigate("/main", {replace: true});
        }
        console.log($userToken.token)
        console.log($user);
    }
</script>
<Router>
<div class="flex justify-center  items-center h-screen">
    <div class="artboard phone-1 horizontal artboard-demo">
        <div class="form-control">
            <input
                type="text"
                placeholder="Username"
                class="input input-info input-bordered"
                bind:value={email}
            />
            <label class="label">
                <span class="label-text-alt">Please enter data</span>
            </label>
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
                <button class="btn btn-sm btn-primary" on:click={handleLogin}>Login</button>
            </div>
            <div class="form-control">
                <a class="link link-accent"><Link to="/signup">Don't have an account Sign Up here</Link></a>
            </div>
        </div>
    </div>
</div>
</Router>
