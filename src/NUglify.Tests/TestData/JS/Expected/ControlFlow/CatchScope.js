function foo(){var err="local",anotherLocal=10;try{anotherLocal=100/0}catch(err){alert(err);anotherLocal=5}alert(err);alert(anotherLocal)}