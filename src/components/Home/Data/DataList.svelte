<script>
    import Table24 from "carbon-icons-svelte/lib/Table24"
    import AddFilled16 from "carbon-icons-svelte/lib/AddFilled16";
    import  TrashCan16  from "carbon-icons-svelte/lib/TrashCan16";
</script>

    <ul class=" shadow-lg bg-base-100 rounded-box px-5 flex flex-col items-center">
      <li class="menu-title flex flex-row">
          <Table24 class="m-1 "/>
           <span class="m-1">Tables</span>   
          <label for="add-table-modal" class="btn btn-square btn-xs m-1 modal-button"> <AddFilled16/> </label>
          <button class="btn bbtn-square btn-xs m-1"> <TrashCan16/> </button>
           
      </li> 
      <li class="my-3">
       <input type="checkbox m-1" checked="checked" class="checkbox"/>
       <span>Table 1</span>
      </li> 
      <li class="my-3">
        <input type="checkbox m-1" class="checkbox"/>
        <span>Table 1</span>
      </li> 
      <li class="my-3">
        <input type="checkbox m-1" class="checkbox"/>
        <span>Table 1</span>
      </li>
    </ul>

    <!-- Add Table Modal -->
    
<input type="checkbox" id="add-table-modal" class="modal-toggle"> 
<div class="modal">
  <div class="modal-box">
    <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p> 
    <div class="modal-action">
      <label for="add-table-modal" class="btn btn-primary">Add</label> 
      <label for="my-modal-2" class="btn">Close</label>
    </div>
  </div>
</div>

  
  
  