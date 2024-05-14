#!/bin/bash
./gradlew build
slice2js --output-dir clientHtml src/main/slice/Chat.ice
java -jar build/libs/chatIce.jar