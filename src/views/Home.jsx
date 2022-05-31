import Image from "../components/Image"
import Title from "../components/Title"


export default function Home(){
  return (
    <div className="mt-4">
      <div className="row">
        <Title>
          Portfolio
        </Title>
      </div>
      <div className="mt-5 row d-flex justify-content-center">
        <Image />
      </div>
      <div className="row mt-5 row d-flex justify-content-center">
        <p>Hello everybody, i’m mtttia and this is my portfolio</p>
      </div>
      <div className="row mt-5 row d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-secondary">
            MY PROJECT
          </button>  
          <div className="d-inline-block" style={{ width: '100px' }}></div>
          <button className="btn btn-primary">
            EMAIL ME
          </button>
        </div>
      </div>      
    </div>
  )
}