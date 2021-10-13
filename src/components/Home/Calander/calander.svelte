<script>
    import { onMount } from "svelte";

    import { InlineCalendar } from "svelte-calendar";
    import { getLog } from "../../../api/calander/calendar";
    import { user } from "../../../Store/store";
    const theme = {
        calendar: {
            width: "400px",
            shadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
        },
        background: {
            primary: "#a991f7",
            highlight: "#a991f7",
            hover: "#eee",
        },
    };
    let selectedDate = new Date();
    let data = {
        userId: $user[0].id,
        date: getDateOnly(selectedDate),
    };
    let response;
    onMount(() => {
        console.log("data", data);
        response = getLog(data);
    });

    $: {
        data = {
            userId: $user[0].id,
            date: getDateOnly(selectedDate),
        };
        response = getLog(data);
    }

    function getDateOnly(date) {
        return (
            selectedDate.getMonth() +
            1 +
            "/" +
            selectedDate.getDate() +
            "/" +
            selectedDate.getFullYear()
        ).toString();
    }
</script>

<div class="grid grid-cols-12">
    <div class="col-span-5 ml-2">
        <InlineCalendar
            {theme}
            bind:selected={selectedDate}
            format="DD/MM/YYYY"
        />
    </div>

    <div class="col-span-6">
        <div class="card bordered shadow-xl">
            <div class="card-body">
                <div class="card-title text-base-content">Log</div>
                {#await response then logs}
                    {#each logs.log as log}
                        <p class="text-base-content">- Updated Table {log}</p>
                    {/each}
                {:catch error}
                    {console.log(error)}
                {/await}
            </div>
        </div>
    </div>
</div>
