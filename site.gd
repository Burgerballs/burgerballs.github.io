extends Node2D

var mus = [
	'play bub\'s fruit salad',
	'coding is rather easy if you know how to code',
	'remember well the name of gargamel!',
	'have fun with people you like, things are always better with two or more!',
	'ex-developer of various mods I wish not to be known for!',
	'i like charting too, will proudly make every chart i make "impossible" for mobile players',
	'i dont frequently play littlebigplanet but can yall flex your boom town scores in the replies of my tweets it would be funny.'
]
# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.

var t:float = 0
# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	t+= delta
	if (t >= 4):
		$ColorRect/Bub.text = mus.pick_random()
		t = 0
	$ColorRect/Bub.modulate.a = sin(t) * 0.5 + 0.5
