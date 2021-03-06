/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/
var fs = require('fs'),
    path = require('path'),
    DEFAULT_COMMAND = "default",
    HELP_DIR = path.join(__dirname, "..", "res", "help"),
    DEFAULT_HELP_PATH = path.join(HELP_DIR, DEFAULT_COMMAND + ".txt");

module.exports = function help (command) {
    //We were called directly from the CLI
    if (Array.isArray(command)) {
        command = command[0] || DEFAULT_COMMAND;
    }

    if (!command) {
        command = DEFAULT_COMMAND;
    }

    var helpFilePath = path.join(HELP_DIR, command + ".txt");

    if (!fs.existsSync(helpFilePath)) {
        helpFilePath = DEFAULT_HELP_PATH;
    }

    console.log(fs.readFileSync(helpFilePath).toString());
};
