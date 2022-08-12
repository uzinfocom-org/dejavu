import { filterHtml } from "../filterHtml";
import css from "./css";

export function html(name: string | undefined) {
  return `
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
              <h2>Jangchi<br/>Faxriy Yorlig'i</h2>
            </div>
          </div>
        </div>
        <div class="avatar">
          <div class="img">
            <img
              src="https://og.xinux.uz/archman.png"
              alt=""
            />
          </div>
          <br>
          <p>${filterHtml(!name ? "Eshmat Toshmat" : name)}</p>
          <p>Xinux Tarafdori</p>
        </div>
        <div class="infos">
          <p>${filterHtml(
            !name ? "Eshmat Toshmat" : name
          )} ni bugungi jangda ko'rsatgan mardliklari uchun jangovor faxriy yorlig' bilan taqdirlanadi!</p>
          <div id="telegram">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 725 435" style="enable-background:new 0 0 725 435;" xml:space="preserve">
              <g>
                <path fill="white" d="M217.212,144.807L181.016,108.611L217.22,0L289.628,72.408L289.627,72.409L362.026,144.808L362.022,144.813L434.429,217.22L362.022,289.628L362.026,289.632L289.627,362.032L289.628,362.033L217.22,434.44L144.812,362.033L217.212,289.633L217.211,289.632L289.616,217.228L289.604,217.216L289.612,217.208L217.211,144.808L217.212,144.807ZM434.44,72.412L506.832,0.021L543.036,108.632L506.832,144.836L506.829,144.833L434.439,217.224L506.838,289.623L579.238,217.222L651.646,289.63L579.238,362.037L579.237,362.035L506.836,434.436L434.428,362.028L434.428,362.028L362.03,289.63L434.437,217.224L362.03,144.817L434.438,72.41L434.44,72.412ZM72.406,289.613L0,217.206L108.611,181.003L144.815,217.206L144.795,217.226L217.202,289.632L144.794,362.04L72.387,289.632L72.406,289.613ZM615.456,181.012L724.068,217.216L651.66,289.623L579.253,217.216L615.456,181.012Z" />
              </g>
              <g>
              </svg>
              <div style="margin-top: 10px;color: white; font-size: x-large; font-weight: bold">
                Xinux Community
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

    `;
}

export default html;
