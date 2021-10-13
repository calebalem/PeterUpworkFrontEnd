<script>
    import Menu24 from "carbon-icons-svelte/lib/Menu24";
    import Dashboard24 from "carbon-icons-svelte/lib/Dashboard24";
    import Database24 from "carbon-icons-svelte/lib/DataBase24";
    import CalendarHeatMap24 from "carbon-icons-svelte/lib/CalendarHeatMap24";
    import { Router, Link, Route, navigate } from "svelte-navigator";
    import DashBoard from "./DashBoard/DashBoard.svelte";
    import MainDataEntry from "./Data/DataEntryMain.svelte";
    import Calander from "./Calander/calander.svelte";
    import { user, userToken } from "../../Store/store";

    let avatarPlaceHolderChar = "G";
    if ($userToken.token !== "" &&  Object.keys($user).length !== 0) {
        avatarPlaceHolderChar = $user[0].userName.charAt(0);
    } else {
        navigate("/signin", { replace: true });
    }

    function logout(){
        user.set({});
        userToken.set("");
        navigate("/signin", { replace: true });
    }
</script>

<Router basepath="/main">
    <main class="h-screen">
        <nav>
            <div
                class="navbar mb-2 shadow-lg bg-primary text-primary-content rounded-box"
            >
                <div class="flex-none  lg:flex">
                    <label
                        for="my-drawer-2"
                        class="btn btn-square btn-ghost drawer-button"
                    >
                        <Menu24 />
                    </label>
                </div>
                <div class="flex-1  px-2 mx-2 lg:flex">
                    <span class="text-lg font-bold"> New Project </span>
                </div>
                <div class="flex-1 lg:flex-none">
                    <div class="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            class="input input-primary input-bordered"
                        />
                    </div>
                </div>
                <div class="flex-none">
                    <button class="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
                <div class="flex-none">
                    <button class="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>
                </div>
                <div>
                    <div class="dropdown dropdown-end">
                        <div class="avatar placeholder">
                            <div tabindex="0" class="btn btn-secondary btn-circle">
                                {avatarPlaceHolderChar}
                            </div>
                        </div>
                        <ul
                            tabindex="0"
                            class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 text-base-content"
                        >
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a on:click={logout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <aside>
            <div
                class="rounded-lg shadow bg-base-200 drawer drawer-mobile h-screen"
            >
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="flex flex-col  drawer-content">
                    <Route path="dashboard">
                        <DashBoard />
                    </Route>
                    <Route path="maindataentry">
                        <MainDataEntry />
                    </Route>
                    <Route path="calander">
                        <Calander />
                    </Route>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay" />
                    <ul
                        class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"
                    >
                        <li>
                            <Link to="dashboard"
                                ><Dashboard24 class="mr-2" /><label
                                    for="my-drawer-2"
                                    class="drawer-button">DashBoard</label
                                ></Link
                            >
                        </li>
                        <li>
                            <Link to="maindataentry">
                                <Database24 class="mr-2" /><label
                                    for="my-drawer-2"
                                    class="drawer-button">Data Entry</label
                                ></Link
                            >
                        </li>
                        <li>
                            <Link to="calander">
                                <CalendarHeatMap24 class="mr-2" />
                                <label for="my-drawer-2" class="drawer-button"
                                    >Calander</label
                                ></Link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </aside>

        <!-- Drop down content profile picture-->
    </main>
</Router>
