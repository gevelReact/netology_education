import Card from './components/Card'
import imageCap from './assets/image-cap.svg'

function App() {
  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap">
        <div className="mr-3 mb-3">
          <Card>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </Card>
        </div>

        <div className="mr-3 mb-3">
          <Card img={imageCap}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card&apos;s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
