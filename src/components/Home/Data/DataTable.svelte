<script>
  import { getTableData, addTableData } from "../../../api/dataTable/dataTable";
  import {
    user,
    selectedTable,
    tableData,
    tableNames,
  } from "../../../Store/store";

  $: {
    if ($selectedTable !== "") {
      let data = {
        id: $user[0].id,
        tableName: $selectedTable,
      };
      getTableData(data).then((value) => {
        tableData.set(value);
        //console.log($tableData);
      });
    }
  }
  function log() {
    console.log("real", $tableData);
  }

  function update() {
    let data = {
      userId: $user[0].id,
      tableName: $selectedTable,
      tableHeaders: $tableData.columnNames,
      tableDataTypes: $tableData.columnTypes,
      tableDatas: $tableData.tableData,
    };
    console.log("update check", data);
    addTableData(data).then((value) => {
      console.log("update", value);
    });
  }

  function addRow() {
    let newRow = [];
    for (let i = 0; i < $tableData.columnNames.length; i++) {
        newRow.push("");
    }
    $tableData.tableData.push(newRow)
    tableData.set($tableData);
  }
</script>

{#if $tableData.length !== 0}
  <div class="overflow-auto  shadow-lg max-h-96 h-96">
    <table class="table w-full text-base-content table-zebra ">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>

          {#each $tableData.columnNames as tableHeader}
            <th>{tableHeader}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each $tableData.tableData as tableRow}
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            {#each tableRow as tableCell}
              <td
                ><input
                  type="text"
                  class="input input-bordered input-sm"
                  bind:value={tableCell}
                  on:change={log}
                /></td
              >
            {/each}
          </tr>
        {/each}
      </tbody>
      <tfoot>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>

          {#each $tableData.columnNames as tableHeader}
            <th>{tableHeader}</th>
          {/each}
        </tr>
      </tfoot>
    </table>
  </div>
  <button class="btn btn-primary m-2" on:click={update}>Update</button>
  <button class="btn btn-primary m-2" on:click={addRow}>Add</button>
{/if}
