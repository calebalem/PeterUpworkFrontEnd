<script>
    import { onMount } from "svelte";
    import {user, tableNames} from "../../../Store/store"
    import {getTables} from "../../../api/dataTable/dataTable"

    import DataList from "./DataList.svelte";
    import DataTable from "./DataTable.svelte";

    onMount(async() => {
        let userId = $user[0].id;
        let data = {
            userId:userId
        }
        const response = await getTables(data)
        tableNames.set(response)
        console.log($tableNames)
    });
</script>

<div>
    <div class="grid grid-cols-12 gap-1 mt-7">
        <div class="col-span-2 mt-12">
            <DataList />
        </div>
        <div class="col-span-10">
            <DataTable />
        </div>
    </div>
</div>
