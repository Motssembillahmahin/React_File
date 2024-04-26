import "bootstrap/dist/css/bootstrap.min.css";
function Todolist2() {
  let todoname = 'GO To College'
  let todoDate = '12/2/23'
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
        <button type="button" class="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default Todolist2;
