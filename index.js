"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
require('source-map-support/register');
const Sequelize = require('sequelize');
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // mysql.server start
        const sequelize = new Sequelize(`mysql://root@localhost/ext_sequelize`, {
            define: {
                freezeTableName: true,
                timestamps: false,
                underscoredAll: true,
                benchmark: true,
            }
        });
        //const sequelize = new Sequelize('ext_sequelize', 'root', <any>null, { host: 'localhost', port: 3306 }, );
        const User = sequelize.define('userdata', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            userName: {
                type: Sequelize.STRING,
            },
            birthday: Sequelize.DATE,
            age: Sequelize.INTEGER(4),
        });
        const Team = sequelize.define('team', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
            },
            owner: {
                type: Sequelize.INTEGER
            }
        });
        // force=trueだとDrop table
        //    await User.sync({ force: true });
        yield sequelize.sync({
            force: true
        });
        console.log(Team);
        console.log(User);
        const res = yield User.create({
            id: 5,
            username: 'bob',
            age: 123,
        });
        const t = yield Team.bulkCreate([
            {
                name: 'Reds',
                owner: 1
            }, {
                name: 'Blues',
                owner: 2
            }, {
                name: 'Greens',
                owner: 3
            }, {
                name: 'Brown',
                owner: 4
            }
        ]);
        console.log(res);
        console.log("Fin!!!");
    });
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFFckMsTUFBWSxTQUFTLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFJdkM7O1FBRUkscUJBQXFCO1FBRXJCLE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLHNDQUFzQyxFQUFFO1lBQ3BFLE1BQU0sRUFBRTtnQkFDSixlQUFlLEVBQUUsSUFBSTtnQkFDckIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixTQUFTLEVBQUUsSUFBSTthQUNsQjtTQUNKLENBQUMsQ0FBQztRQUNILDJHQUEyRztRQUUzRyxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFpQixVQUFVLEVBQUU7WUFDdEQsRUFBRSxFQUFFO2dCQUNBLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztnQkFDdkIsVUFBVSxFQUFFLElBQUk7YUFHbkI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO2FBQ3pCO1lBQ0QsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3hCLEdBQUcsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUM1QixDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFpQixNQUFNLEVBQUU7WUFDbEQsRUFBRSxFQUFFO2dCQUNBLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztnQkFDdkIsVUFBVSxFQUFFLElBQUk7YUFDbkI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO2FBQ3pCO1lBQ0QsS0FBSyxFQUFFO2dCQUNILElBQUksRUFBRSxTQUFTLENBQUMsT0FBTzthQUMxQjtTQUNKLENBQUMsQ0FBQztRQUVILHlCQUF5QjtRQUN6Qix1Q0FBdUM7UUFDdkMsTUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxCLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxQixFQUFFLEVBQUUsQ0FBQztZQUNMLFFBQVEsRUFBRSxLQUFLO1lBQ2YsR0FBRyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDNUI7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLENBQUM7YUFDWCxFQUFFO2dCQUNDLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxDQUFDO2FBQ1gsRUFBRTtnQkFDQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsQ0FBQzthQUNYLEVBQUU7Z0JBQ0MsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLENBQUM7YUFDWDtTQUNKLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUxQixDQUFDO0NBQUE7QUFFRCxJQUFJLEVBQUUsQ0FBQyJ9