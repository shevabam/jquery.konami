# jquery.konami.js

jQuery plugin to trigger an event after the success of the Konami Code (up up down down left right left right b a).


## Installation

Include script after the jQuery library:

```<script src="/path/to/jquery.konami.js"></script>```


## How to use it

Just add this:

    <script>
        $(function(){
            $(window).konami({
                run: function(){
                    alert('Good job !');
                }
            });
        });
    </script>


## Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| **run** | `Function` | `null` | Function that triggers the success of the code |