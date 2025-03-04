const devicePath = '/chart/device/'
const deviceList = require('../../../../json/deviceList');

const header = [
  'iPhone',
  'iPad',
  'iPod'
]

const deviceId = [
  'iPhone',
  'iPad',
  'iPod'
]

var deviceArr = [[], [], []]
var tableCount = [];
for (var i in deviceId) {
  for (var d in deviceList) if (d.startsWith(deviceId[i]))
    deviceArr[i].push(deviceList[d]);
  deviceArr[i].reverse()
  tableCount.push(parseInt(deviceArr[i].length / 3) + !!(deviceArr[i].length % 3))
}

function getDevice(device) {
  var ret = [];
  for (var d in deviceList) {
    if (deviceList[d] == device) {
      ret.push(d);
    }
  }
  return ret;
}

function getHtml() {
  var html = '';
  
  html += '[[toc]]\n'
  
  for (var i in deviceArr) {
    if (deviceArr[i].length < 1) continue;
    html += '## ' + header[i] + '\n';
    for (var j = 0; j < tableCount[i]; j++) {
      html += '<table><colgroup><col width="33%"><col width="33%"><col width="33%"></colgroup><thead><tr>'
      for (var k = 0; k < 3; k++) {
        if (deviceArr[i][j*3+k]) html += '<th>' + deviceArr[i][j*3+k].name.replace('generation', 'gen') + '</th>';
        else html += '<th></th>';
      }
      html += '</tr></thead><tbody><tr>'
      for (var k = 0; k < 3; k++) {
        if (deviceArr[i][j*3+k]) {
          const device = getDevice(deviceArr[i][j*3+k]);
          html += '<td><a href="' + devicePath + device + '"><img src="https://ipsw.me/assets/devices/' + device + '.png" alt="" width="50%"></a></td>';
        }
        else html += '<td></td>';
      }
      html += "</tr></tbody></table>\n\n"
    }
  }
  
  return html;
}

module.exports = getHtml();