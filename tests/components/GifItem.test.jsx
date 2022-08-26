/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas de GifItem', () => { 
    const title = "Soy un título";
    const url = "https://somcomunitatenergetica.cat/static/img/somComLogo.52c2aa7.svg";
    test('GifItem debe ser igual al snapshot', () => {
       const { container } =  render( <GifItem title={ title } url={ url } />);
       expect( container ).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el url y el alt indicado', () => {
        render( <GifItem title={ title } url={ url } /> )
        screen.debug();
        expect( screen.getByRole( 'img' ).src ).toBe( url )
        expect( screen.getByRole( 'img' ).alt ).toBe( title )
        const { src, alt } = screen.getByRole( 'img' )
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
    });

    test('debe mostrar el título en el componente', () => {
        render( <GifItem title={ title } url={ url } /> )
        expect( screen.getByText( title )).toBeTruthy()
    })
 })