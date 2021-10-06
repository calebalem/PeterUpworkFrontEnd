<script>
    import Table24 from "carbon-icons-svelte/lib/Table24"
    import AddFilled16 from "carbon-icons-svelte/lib/AddFilled16";
    import  TrashCan16  from "carbon-icons-svelte/lib/TrashCan16";
    import {tableNames} from "../../../Store/store";

    let dynamicInputFields = ["1"]
    let count = 1;
    function increment(){
        count = count + 1;
        dynamicInputFields = [...dynamicInputFields , count.toString()];
    }
</script>

    <ul class=" shadow-lg bg-base-100 rounded-box px-5 flex flex-col items-center">
      <li class="menu-title flex flex-row">
          <Table24 class="m-1 "/>
           <span class="m-1">Tables</span>   
          <label for="add-table-modal" class="btn btn-square btn-xs m-1 modal-button"> <AddFilled16/> </label>
          <button class="btn bbtn-square btn-xs m-1"> <TrashCan16/> </button>
           
      </li> 
      {#each $tableNames as tableName}
      <li class="my-3">
       <input type="checkbox m-1" checked="checked" class="checkbox"/>
       <span>{tableName}</span>
      </li>
      {/each}
    </ul> 
    <!-- Add Table Modal -->
    
<input type="checkbox" id="add-table-modal" class="modal-toggle"> 
<div class="modal">
  <div class="modal-box">
   <div class="overflow-y-auto  shadow-lg m-2 p-2">
      <div class="grid grid-cols-12 gap-2">
          {#each dynamicInputFields as input}
              <input type = "text" placeholder="Column Name" class="input input-primary input-bordered col-span-5">
              <select class="select select-bordered select-primary w-full max-w-xs col-span-5">
                <option disabled="disabled" selected="selected">INT</option>
                <option>Text</option>
                <option>Float</option>
              </select>
              <button class="btn btn-outline btn-primary col-span-2" on:click={increment}><AddFilled16/></button>
          {/each}
      </div>
   </div>
    <div class="modal-action">
      <label for="add-table-modal" class="btn btn-primary">Add</label> 
      <label for="my-modal-2" class="btn">Close</label>
    </div>
  </div>
</div>

  
  
  