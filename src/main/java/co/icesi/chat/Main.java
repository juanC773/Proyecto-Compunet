package co.icesi.chat;

import java.util.Scanner;


public class Main {

    public static void main(String[] args)
    {
        try(com.zeroc.Ice.Communicator communicator = com.zeroc.Ice.Util.initialize(args))
        {
            com.zeroc.Ice.ObjectAdapter adapter = communicator.createObjectAdapterWithEndpoints("chat", "ws -p 10000");
            com.zeroc.Ice.Object object = new ServicesImpl();
            adapter.add(object, com.zeroc.Ice.Util.stringToIdentity("chat"));
            adapter.activate();
            communicator.waitForShutdown();
        }
    }
    


}