
import "js/web.jsx";
import "js/websql.jsx";
import "test-case.jsx";

class _Test extends TestCase {
	function compile() : void {
		var w  = websql.asWindowDatabase(dom.window);

		w.openDatabase("foo", "1.0", "xxx", 10, function(db : Database) : void {
			db.transaction(function(txn : SQLTransaction) : void {
				txn.executeSql("...", [] : variant[],
					function(txn : SQLTransaction, r : SQLResultSet) : void {
						// ...
					});
			});
		});
	}

	function testCompile() : void {
		this.expect(true).toBe(true);
	}
}
