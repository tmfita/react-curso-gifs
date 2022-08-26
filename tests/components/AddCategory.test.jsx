/** @jest-environment jsdom */

import { fireEvent, render, screen } from "@testing-library/react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas de AddCategory', () => { 
    
    test('debe cambiar el valor de la caja de texto', () => { 
        
        render( <AddCategory onNewCategory = { () => {} }/> );
        const input = screen.getByRole('textbox');
        //lanzamos el evento 'input' (predeterminado) para que afecte a nuestro input (const input) y le mandamos el valor que queremos asignar
        fireEvent.input( input, { target: { value: 'Saitama' } } );
        //screen.debug()
        expect(input.value).toBe('Saitama')

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory = { onNewCategory }/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        screen.debug()
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith( inputValue );

     })

    test('no debe llamar onNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory = { onNewCategory }/> );
        const form = screen.getByRole('form');

        fireEvent.submit( form );
        screen.debug()
        
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })

 })