package com.projetono;

public class Main {

    public static void main(String[] args) {
        no<String> no1 = new no<>("Conteúdo no1");

        no<String> no2 = new no<>("Conteúdo no2");
        no1.setProximoNo(no2);

        no<String> no3 = new no<>("Conteúdo no3");
        no2.setProximoNo(no3);

        no<String> no4 = new no<>("Conteúdo no4");
        no3.setProximoNo(no4);

        // no1 aponta para no2 aponta para no3 aponta para no4 aponta para null

        System.out.println(no1);
        System.out.println(no1.getProximoNo());
        System.out.println(no2);

        System.out.println("-------------------");

        System.out.println(no1);
        System.out.println(no1.getProximoNo());
        System.out.println(no1.getProximoNo().getProximoNo());
        System.out.println(no1.getProximoNo().getProximoNo().getProximoNo());
        System.out.println(no1.getProximoNo().getProximoNo().getProximoNo().getProximoNo());
    }
}
