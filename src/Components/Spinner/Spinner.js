const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border"
        style={{ width: '3rem', height: '3rem', margin: '300px 0px 0px 0px' }}
        role="status"
      >
        {/* <span class="sr-only">Loading...</span> */}
      </div>
    </div>
  )
}

export default Spinner
