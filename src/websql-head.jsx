import "js/web.jsx";

class websql {
	static function asWindowDatabase(window : Window) : WindowDatabase {
		return window as __noconvert__ WindowDatabase;
	}
	static function asWorkerUtilsDatabase(worker : Worker) : WorkerUtilsDatabase {
		return worker as __noconvert__ WorkerUtilsDatabase;
	}
}

