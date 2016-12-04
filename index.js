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
                autoIncrement: true,
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
                autoIncrement: true,
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
                id: 1,
                name: 'Reds',
                owner: 1
            }, {
                //     id: 2,
                name: 'Blues',
                owner: 2
            }, {
                //   id: 3,
                name: 'Greens',
                owner: 3
            }, {
                // id: 4,
                name: 'Brown',
                owner: 4
            }
        ]);
        console.log(res);
        console.log("Fin!!!");
    });
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFFckMsTUFBWSxTQUFTLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFJdkM7O1FBRUkscUJBQXFCO1FBRXJCLE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLHNDQUFzQyxFQUFFO1lBQ3BFLE1BQU0sRUFBRTtnQkFDSixlQUFlLEVBQUUsSUFBSTtnQkFDckIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixTQUFTLEVBQUUsSUFBSTthQUNsQjtTQUNKLENBQUMsQ0FBQztRQUNILDJHQUEyRztRQUUzRyxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFpQixVQUFVLEVBQUU7WUFDdEQsRUFBRSxFQUFFO2dCQUNBLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztnQkFDdkIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGFBQWEsRUFBRSxJQUFJO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTthQUN6QjtZQUNELFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSTtZQUN4QixHQUFHLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBaUIsTUFBTSxFQUFFO1lBQ2xELEVBQUUsRUFBRTtnQkFDQSxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87Z0JBQ3ZCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixhQUFhLEVBQUUsSUFBSTthQUN0QjtZQUNELElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07YUFDekI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO2FBQzFCO1NBQ0osQ0FBQyxDQUFDO1FBRUgseUJBQXlCO1FBQ3pCLHVDQUF1QztRQUN2QyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDakIsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzFCLEVBQUUsRUFBRSxDQUFDO1lBQ0wsUUFBUSxFQUFFLEtBQUs7WUFDZixHQUFHLEVBQUUsR0FBRztTQUNYLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUM1QjtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsQ0FBQzthQUNYLEVBQUU7Z0JBQ0MsYUFBYTtnQkFDYixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsQ0FBQzthQUNYLEVBQUU7Z0JBQ0MsV0FBVztnQkFDWCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsQ0FBQzthQUNYLEVBQUU7Z0JBQ0MsU0FBUztnQkFDVCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsQ0FBQzthQUNYO1NBQ0osQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTFCLENBQUM7Q0FBQTtBQUVELElBQUksRUFBRSxDQUFDIn0=