import * as program from 'commander';
import { advancedDemo } from './walker';
import * as path from 'path';
import * as ts from 'typescript';
const prog = program
  .version('0.0.1')
  .arguments('<entry> [otherEntries...]')
  .option('--project <path>', 'Path to folder containing tsconfig.json')
  .option('--output <path>', 'output folder')
  .action(function(entry: string, otherEntries: string[]) {
    const entries = [entry, ...otherEntries];
    const project = program.opts().project;
    const output = program.opts().output;
    if (!entries) {
      prog.outputHelp();
      throw new Error('No entries');
    }
    if (!project) {
      prog.outputHelp();
      throw new Error('No project');
    }
    if (!output) {
      prog.outputHelp();
      throw new Error('No output');
    }

    const projectPath = path.join(process.cwd(), project);
    const entryPaths = entries.map(e => path.join(projectPath, e));
    const proj = ts.createProgram(entryPaths, {
      allowJs: true,
      checkJs: true,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      target: ts.ScriptTarget.ES5
    });
    advancedDemo(proj, entryPaths);
  })
  .parse(process.argv);
