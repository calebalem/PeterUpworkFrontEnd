<script>
    import DataList from "./DataList.svelte";
    import DataTable from "./DataTable.svelte";
</script>

<div>
    <div class="grid grid-cols-12 gap-1 mt-7">
        <div class="col-span-2 mt-12" >
            <DataList />
        </div>
        <div class="col-span-10">
            <DataTable  />
        </div>
    </div>
</div>
