/** @jest-environment jsdom */
import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 
    
   test('debe de devolver el estado inicial', () => {
     const { result } = renderHook( () => { useFetchGifs('Simpsons ') });
     const { images, isLoading } = result.current;

     expect( images.length ).toBe(0);
     expect( isLoading ).toBeTruthy;
   })

   test('debe de devolver un arreglo de imágenes y isloading false', async() => {
    const { result } = renderHook( () => { useFetchGifs('Simpsons ') });
    
    await waitFor(
        () => expect( result.current.images.length ).toBeGreaterThan(0)
    )
    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy;
  })
    
 })