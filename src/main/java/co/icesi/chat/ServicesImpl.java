package co.icesi.chat;
import com.zeroc.Ice.Current;

import co.icesi.chat.services.*;

public class ServicesImpl implements Hello {

    @Override
    public String sayHello(Current current) {
        return "Hello World!";
    }
    
}