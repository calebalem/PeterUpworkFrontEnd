<script>
    import Table24 from "carbon-icons-svelte/lib/Table24"
    import AddFilled16 from "carbon-icons-svelte/lib/AddFilled16";
    import  TrashCan16  from "carbon-icons-svelte/lib/TrashCan16";
    import {tableNames, user, selectedTable} from "../../../Store/store";
    import {createTable} from "../../../api/dataTable/dataTable";


    let tableSchemes = [{columnName:"",columnType:"INT"}]
    let tableName;
    let userId = $user[0].id;
    console.log("user",$user);
    function addColumn(){
        tableSchemes = tableSchemes.concat({columnName: "", columnType: "INT"});
        console.log(tableSchemes);
    }

    async function addTable(){
      let tableHeaders = [];
      let tableDataTypes = [];
      for (let i = 0; i < tableSchemes.length; i++){
        if(tableSchemes[i].columnName !== ""){
          console.log(tableSchemes[i].columnName)
          tableHeaders.push(tableSchemes[i].columnName);
          tableDataTypes.push(tableSchemes[i].columnType);
        }
      }
      let data = {
        userId : userId,
        tableName : tableName,
        tableHeaders : tableHeaders,
        tableDataTypes : tableDataTypes
      }
      console.log(data);
      let response = await createTable(data);
      if(response.status === 200){
          tableNames.set([...tableNames,tableName])
      }else{

      }

    }

    function cancel(){
      tableSchemes = [{columnName: "", columnType:"INT"}]
    }
</script>

    <ul class=" shadow-lg bg-base-100 rounded-box px-2 flex flex-col h-96 mx-1 text-base-content">
      <li class="menu-title flex flex-row shadow-lg rounded-box">
          <Table24 class="m-1 flex-shrink"/>
           <span class="m-1 text-base-content flex-shrink">Tables</span>   
          <label for="add-table-modal" class="btn btn-outline btn-primary btn-xs m-1 modal-button"> <AddFilled16/> </label>
          <button class="btn btn-outline btn-primary btn-xs m-1"> <TrashCan16/> </button>
           
      </li> 
      {#each $tableNames as tableName}
      <li class="my-3">
       <input type="checkbox" checked="checked" class="checkbox checkbox-sm"/>
       <label class="text-base-content link link-hover" on:click={(event)=>selectedTable.set(event.target.textContent)}>{tableName}</label>
      </li>
      {/each}
    </ul> 
    <!-- Add Table Modal -->
    
<input type="checkbox" id="add-table-modal" class="modal-toggle"> 
<div class="modal text-base-content">
  <div class="modal-box h-50 max-h-96">
   <div class="overflow-y-auto  shadow-lg m-2 p-2">
      <div class="grid grid-cols-12 gap-2">
          <input type= "text" placeholder="Table Name" class="input input-primary input-bordered col-span-12" bind:value={tableName} required>
          {#each tableSchemes as tableScheme}
              <input type = "text" placeholder="Column Name" class="input input-primary input-bordered col-span-5 " bind:value={tableScheme.columnName}>
              <select class="select select-bordered select-primary w-full max-w-xs col-span-5" bind:value={tableScheme.columnType} >
                <option selected value="INT">Integer</option>
                <option value="text">Text</option>
                <option value="decimal">Decimal</option>
              </select>
              <button class="btn btn-outline btn-primary col-span-2" on:click={addColumn}><AddFilled16/></button>
          {/each}
      </div>
   </div>
    <div class="modal-action">
      <label for="" class="btn btn-primary" on:click={addTable}>Add</label> 
      <label for="add-table-modal" class="btn" on:click={cancel}>Cancel</label>
    </div>
  </div>
</div>

  
  
  