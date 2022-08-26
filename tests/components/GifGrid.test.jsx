/** @jest-environment jsdom */
import { GifGrid } from "../../src/components/GifGrid"
import { render, screen } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => { 
    const category = "Simpsons";
    test('debe mostrar el loading inicialmente', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category= { category } />)
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ));  
    
    });

    test('debe mostrar items cuando se cargan las imágenes  userFetchGifs', () => {
        const gifs = [
            {
                id: '121',

            }
        ]
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category= { category } />);
        expect( screen.getAllByRole('img').length).toBe(2)
    })
 })