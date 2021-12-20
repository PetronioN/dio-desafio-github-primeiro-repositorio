package com.projeto.atribuicaoReferencia;

public class main {
    public static void main(String[] args) {
        int intA = 1;
        int intB = intA;

        System.out.println("IntA=" + intA + " IntB=" + intB);
        intA = 2; // IntB continua sendo 1.
        System.out.println("IntA=" + intA + " IntB=" + intB);

        meuObj objA = new meuObj(1);
        meuObj objB = objA;

        System.out.println("ObjA=" + objA + " ObjB=" + objB);
        objA.setNum(2);
        System.out.println("ObjA=" + objA + " ObjB=" + objB); // O objeto b vai imprimir 2.
    }
}