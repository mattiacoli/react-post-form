import { useState } from "react"


function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: '',
  })




  return (
    <>
      <header>
        <nav className="navbar bg-dark p-4">
          <div className="logo navbar-brand text-white">
            PostForm
          </div>
        </nav>
      </header>

      <main>
        <div className="container my-4">
          <div className="row">
            <div className="col">
              <div className="card p-3">

                <form method="POST">

                  <div className="mb-3">
                    <label htmlFor="author" className="form-label fw-bold">Author</label>
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      id="author"
                      aria-describedby="helpId"
                      placeholder=""

                    />
                    <small id="helpId" className="form-text text-muted">insert author name</small>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id="title"
                      aria-describedby="helpId"
                      placeholder=""
                    />
                    <small id="helpId" className="form-text text-muted">insert posts title</small>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="body" className="form-label fw-bold">Body</label>
                    <textarea className="form-control" name="body" id="body" rows="3"></textarea>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                      checked
                    />
                    <label className="form-check-label" htmlFor=""> Public</label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary mt-4"
                  >
                    Submit
                  </button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </main>





    </>
  )
}

export default App
