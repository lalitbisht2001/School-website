
import styled from 'styled-components';
function Bigbox({ array }) {
    return (
        <Box>
            {
                array?.map((value, i) => (
                    <div key={i} className='box'>
                        <div className='img'>
                            <img src={value.logo} alt="" />
                        </div>
                        <p className='heading'>{value.heading}</p>
                        <p className='para'>{value.para}</p>
                    </div>
                ))
            }
        </Box>
    )
}

export default Bigbox;
const Box = styled.div`
  display: flex;
  gap: 4em;
  height: 30vh;
  width: 90%;
  margin: -2em 4.3em; 
  position: absolute;
  z-index: 100; 
  .box{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 32vh;
    width: 45vh;
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    /* background-color: green; */
    .img{
        background-color: red;
        height:3em;
        width: 3.3em;
        border: 1px solid red;
        border-radius: 12em;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        img{
            color: white;
            height: 1.8em;
            width: 1.7em;
        }
    }
    .heading{
        font-size: 1.4em;
        font-weight: 600;
    }
  } 
  .para{
    font-size: 1em;
    color: #737373;
  }
 `;
