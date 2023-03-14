UPDATE public."Animals"
SET
	image = (
		bytea (
			'D:/Project/Zookeeper_LionGate/home/src/Assets/Tiger.jpg'
			 
		)
	)
WHERE
	id = 1;