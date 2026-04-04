# Create Widget

## Create Widget

Run the following command in the project root directory
```shell
widget create
```
Adjust the widget information according to the prompts (the example creates a widget named clock)

```shell
? Please enter the widget name (UpperCamelCase), e.g.: CountdownClock Clock
Clock                                                                                                                                   16:59:02
? Please enter the widget title, e.g.: Countdown Clock
Clock                                                                                                                                    16:59:07
? Please select the widget width, up to 3 choices. For example, selecting 2,4,6 means the widget's min width is 2, default is 4, and max is 6. A single choice means it cannot be resized. 2, 3
2,3                                                                                                                                     16:59:12
? Please select the widget height, up to 3 choices. For example, selecting 1,2 means the widget's min height is 1, default is 2, and max is 2. A single choice means it cannot be resized. 3, 4
3,4                                                                                                                                     16:59:14
? Is the widget configurable? For example, modifying background color, font size, etc. Yes
true
```
Now an additional `clock` folder will appear in the `/src/widgets` directory, containing the template code for the widget
```shell
/src/widget/clock/Clock.widget.ts       # Widget info (title, dimensions, description, etc.)
/src/widget/clock/ClockConfigView.vue   # Widget configuration page
/src/widget/clock/ClockWidgetRoutes.ts  # Widget routing
/src/widget/clock/ClockWidgetView.vue   # Widget page
```