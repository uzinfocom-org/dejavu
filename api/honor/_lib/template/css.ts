function css() {
    return (`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

    * {
      --dark: #393939;
      --red: #d12229;
    }
    
    body {
      margin: 0;
      font-family: Roboto, Arial, Helvetica, sans-serif;
      position: relative;
    }
    
    .credit {
      position: absolute;
      top: 15px;
      right: 10px;
      border-radius: 10px;
      padding: 10px;
      background-color: rgb(248, 92, 113);
      cursor: pointer;
      z-index: 2;
      overflow: hidden;
    }
    
    .credit a {
      text-decoration: none;
      color: #eee;
      padding: 10px;
    }
    
    .credit:after {
      box-sizing: border-box;
      content: "";
      border: 8px solid;
      border-color: transparent transparent transparent #eee;
      width: 8px;
      height: 8px;
      position: absolute;
      right: 1px;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.5s;
    }
    .credit:hover::after {
      right: -3px;
    }
    
    .test {
      background-color: #1769ff;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: -100%;
      transition: 0.5s ease-in-out;
      z-index: -1;
    }
    
    .credit:hover .test {
      left: 0;
    }
    .business2 {
      min-height: 100vh;
      background-image: url("https://linuxhint.com/wp-content/uploads/2019/12/4-4.png");
    }
    
    .business2 svg {
      width: 50px;
    }
    
    .business2 .infos > div svg {
      width: 25px;
      height: 25px;
      margin-right: 10px;
      background-color: var(--red);
      padding: 8px;
      border-radius: 7px;
    }
    
    .business2 .infos > div p {
      font-size: 0.8rem;
      margin: 5px 0;
      font-weight: 500;
    }
    
    .business2 .front {
      background-color: var(--dark);
      width: 380px;
      height: 580px;
      margin: 20px;
      border-radius: 25px;
      overflow: hidden;
      position: relative;
    }
    
    .business2 h1,
    .business2 h2,
    .business2 p {
      margin: 0;
      color: #eee;
    }
    
    .business2 .red {
      height: 35%;
      background-color: var(--red);
    }
    
    .business2 .head {
      display: flex;
      justify-content: center;
      padding: 25px 0;
    }
    
    .business2 .head img {
      width: 40px;
    }
    
    .business2 .head > div {
      text-align: center;
      margin: 0 10px;
      text-transform: uppercase;
    }
    
    .business2 .head > div p {
      font-size: 0.8rem;
      font-weight: 600;
    }
    
    .business2 .avatar {
      position: absolute;
      width: 50%;
      left: 50%;
      top: 100px;
      transform: translate(-50%);
      text-align: center;
    }
    
    .business2 .img {
      background-color: #bfc2c7;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 6px solid var(--dark);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .business2 .img img {
      width: 80%;
      padding: 10px 0;
    }
    
    .business2 .avatar p:nth-of-type(1) {
      text-transform: uppercase;
      font-weight: 900;
    }
    
    .business2 .infos {
      text-align: center;
      position: absolute;
      bottom: 32%;
    }
    
    /* .business2 .infos > div {
      display: flex;
      margin: 5px;
    } */
    
    .business2 .infos > div p {
      font-size: 0.8rem;
      margin: 5px 0;
      font-weight: 500;
    }
    
    #filter {
      justify-content: center;
      display: flex;
      align-items: center;
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
    }
    
    .infos {
        position: absolute;
        top: 60%;
    }
    
    #telegram {
        margin-top: 40px;
    }    
    `)
}

export default css;
