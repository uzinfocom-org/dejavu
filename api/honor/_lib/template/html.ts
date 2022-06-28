import { filterHtml } from "../filterHtml";
import css from "./css";

export function html(name: string | undefined) {
    return( 
    `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style> ${css()} </style>
  <body>
    <div class="business2">
      <div id="filter">
      <div class="front">
        <div class="red">
          <div class="head">
            <div>
              <h2>Xinux <br> community</h2>
            </div>
          </div>
        </div>
        <div class="avatar">
          <div class="img">
            <img
              src="https://i.ibb.co/G9GrQnK/arch.png"
              alt=""
            />
          </div>
          <p>${filterHtml(!name ? 'John Doe' : name)}</p>
          <p>Arch user</p>
        </div>
        <div class="infos">
          <p>John Smithni Arch linux o'rnatib, Arch foydalaniluvchilari oilasiga qo'shilgani bilan qutlaymiz!</p>
          <div id="telegram">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve">
              <g>
                <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M0,0v455h455V0H0z M384.814,100.68l-53.458,257.136   c-1.259,6.071-8.378,8.822-13.401,5.172l-72.975-52.981c-4.43-3.217-10.471-3.046-14.712,0.412l-40.46,32.981   c-4.695,3.84-11.771,1.7-13.569-4.083l-28.094-90.351l-72.583-27.089c-7.373-2.762-7.436-13.171-0.084-16.003L373.36,90.959   C379.675,88.517,386.19,94.049,384.814,100.68z"/>
                <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M313.567,147.179l-141.854,87.367c-5.437,3.355-7.996,9.921-6.242,16.068   l15.337,53.891c1.091,3.818,6.631,3.428,7.162-0.517l3.986-29.553c0.753-5.564,3.406-10.693,7.522-14.522l117.069-108.822   C318.739,149.061,316.115,145.614,313.567,147.179z"/>
              </g>
              <g>
              </svg>
              <div style="margin-top: 10px">
                <h2>@xinuxuz</h2>
            </div>
         <div id="telegram">
          </div>    
        </div>
          </div>
          </div>
        </div>
      </div>
  </body>
</html>

    `)
}

export default html;
