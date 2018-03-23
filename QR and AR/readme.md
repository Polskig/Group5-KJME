## QR and AR

These prototypes were used to explore the QR code system and test the responses we got from users.

###Intallation

Download the master.zip file and unpack it. Open npm command line and change directory to the location of the QR and AR folder inside the Group5-KJME folder.
$ cd/YOUR PATH/Group5-KJME/QR and AR/demo

###Requirements

-A webcam or phone camera
-Good lighting
-Printed set of the markers (they can be found in the lib folder)

###GLitch

If you don’t want to download the repository, there is a running Glitch demo that only requires you to print the markers.

### [Glitch](https://qr-and-ar.glitch.me)

# Tips and Troubleshooting

## 3D Models
The easiest way to create your own 3D models is to use a program like [Blender](https://www.blender.org/) which has the capability to export .obj files built into it.
Blender is difficult to use if you are new to 3D modelling, so I recommend using something much simpler like [SketchUp](https://www.sketchup.com/) to create your models.
Just export your models from SketchUp in .dae format, then import the .dae file into blender and then finally export from blender as a .obj file. 

# The inspector
A-frame has it's own built in inspector that you can use in your browser to examine what's going on within the scene you have created.
Unfortunately there is not much documentation on how to use the inspector anywhere, but here is what we've learned:

Open it in your browser with ctrl + alt + i

Zoom, rotate, pan:
There are little markers in the top right of the inspector.

Selecting entities:
Within your code you create entities within the scene which will show up on the left hand side of the inspector. you can select these and look at some important things.
Note that you will get additional options in the top right of you inspector whejn selecting an entitity, like scaling. Also you will se all the attributes of the entity on the right hand side, which you can change to see how they affect it. 

If you have found some attributes that need to be changed, try adding those into your code. 

#If you models are not showing
Check if your models are actually there in the inspector. See instructions above.

Try adding the scale="0.1 0.1 0.1" attribute to your model entity in the code. Sometimes models are just too big to show up.

#The camera entity
If you are having trouble with the way the camera is reacting ewith the markers, then open the inspector and play around with the camera entity, to gain an understanding of what the camera is actually seeing.

Sometimes the camera can be off center from the markers a little bit, or the objects can be outside of the cameras field of view. These are all things that can be changed in the code by setting attributes in the camera entitiy and to figure out what to change you have to try out what you want in the inspector.

Check out our attributes in the QR and AR 1 folder index.html


