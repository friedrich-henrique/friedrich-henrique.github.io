import { css } from 'styled-jsx/css'

const styles = css`
  body {
    background-color: black;
  }
  
  .simple-spinner {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .simple-spinner span {
    display: block;
    width: 30px;
    height: 30px;
    border: 3px solid transparent;
    border-radius: 50%;
    border-right-color: rgba(255, 255, 255, 0.7);
    animation: spinner-anim 0.8s linear infinite;
  }
  
  @keyframes spinner-anim {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const LoadingSpinner = () => {
    return (
        <div className="simple-spinner">
            <span></span>
            <style jsx>{styles}</style>
        </div>
    )
}

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <LoadingSpinner />
}
