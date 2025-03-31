import { useState } from "react"


function App() {

  const [success, setSuccess] = useState(false)

  const [error, setError] = useState(false)

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false,
  })

  function handleData(e) {
    const key = e.target.name
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

    setFormData({ ...formData, [key]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    console.log(formData);

    const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

    function validation() {
      if (formData.author.trim().length <= 4) {
        setError(true)

        return false
      }

      if (formData.title.trim().length <= 5) {
        setError(true)

        return false
      }

      if (formData.body.trim().length <= 50) {
        setError(true)

        return false
      }

      return true

    }

    if (!validation()) {
      return
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json)
      .then(data => {
        setSuccess(true)
        console.log('dati inviati con successo ', data);
      })
      .catch(err => {
        setError(true)
        setSuccess(false)
        console.log('Errore invio dati :', err);
      })
  }


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

          {/* alert */}
          {success ? (
            <div className="alert alert-success d-flex align-items-center gap-3" role="alert">
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              <div>
                Dati inviati con successo!
              </div>
            </div>) : ''}

          {error ? (
            <div className="alert alert-danger d-flex align-items-center gap-3" role="alert">
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              <div>
                Errore nell'invio dati!
              </div>
            </div>) : ''}



          <div className="row">
            <div className="col">
              <div className="card p-3">

                <form method="POST"
                  onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label htmlFor="author" className="form-label fw-bold">Author</label>
                    <input
                      type="text"
                      className={`form-control  ${error ? 'is-invalid' : ''} ${success ? 'is-valid' : ''}`}
                      name="author"
                      id="author"
                      aria-describedby="helpId"
                      placeholder=""
                      value={formData.author}
                      onChange={handleData}

                    />
                    <small id="helpId" className="form-text text-muted">insert author name</small>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">Title</label>
                    <input
                      type="text"
                      className={`form-control  ${error ? 'is-invalid' : ''} ${success ? 'is-valid' : ''}`}
                      name="title"
                      id="title"
                      aria-describedby="helpId"
                      placeholder=""
                      value={formData.title}
                      onChange={handleData}
                    />
                    <small id="helpId" className="form-text text-muted">insert posts title</small>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="body" className="form-label fw-bold">Body</label>
                    <textarea className="form-control" name="body" id="body" rows="3"
                      value={formData.body}
                      onChange={handleData}></textarea>
                  </div>

                  <div className="form-check">
                    <input
                      name="public"
                      className={`form-check-input ${error ? 'is-invalid' : ''} ${success ? 'is-valid' : ''}`}
                      checked={formData.public}
                      onChange={handleData}
                      id="public"
                      type="checkbox" />
                    <label className="form-check-label" htmlFor="public"> Public</label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary mt-4"
                  >
                    Send <i className="fa fa-paper-plane" aria-hidden="true"></i>
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
