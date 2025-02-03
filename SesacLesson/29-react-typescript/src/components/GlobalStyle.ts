import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Ownglyph_ParkDaHyun';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2411-3@1.0/Ownglyph_ParkDaHyun.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ownglyph_ParkDaHyun';
}

html{
    font-size: 20px;
}

a{
    text-decoration: none;
}

ul, ol{
    list-style: none;
}
`;
