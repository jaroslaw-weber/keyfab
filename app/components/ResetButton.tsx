export function ResetButton() {
  function reset() {
    //cleanup local storage
    localStorage.clear();
    //refresh the page
    window.location.reload();
  }
  return (
    <button className="btn btn-error w-20 ml-auto text-white" onClick={(e) => reset()}>
      Reset
    </button>
  );
}
