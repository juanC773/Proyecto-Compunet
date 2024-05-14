package co.icesi.chat;

public class Main {

    public static void main(String[] args)
    {
        try(com.zeroc.Ice.Communicator communicator = com.zeroc.Ice.Util.initialize(args, "server.cfg"))
        {
            com.zeroc.Ice.Properties properties = communicator.getProperties();
            com.zeroc.Ice.ObjectAdapter adapter = communicator.createObjectAdapterWithEndpoints("chat", properties.getProperty("chat.Endpoints"));
            com.zeroc.Ice.Object object = new ServicesImpl();
            adapter.add(object, com.zeroc.Ice.Util.stringToIdentity("chat"));
            adapter.activate();
            System.out.println("Server is running: " + properties.getProperty("chat.Endpoints"));
            communicator.waitForShutdown();
        }
    }
    


}