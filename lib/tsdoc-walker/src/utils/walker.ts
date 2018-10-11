import * as ts from 'typescript';
import * as tsdoc from '@microsoft/tsdoc';
import { DocNodeLeaf } from '@microsoft/tsdoc';

import * as os from 'os';
import * as colors from 'colors';

export function reportCompilerErrors(
  compilerDiagnostics: ReadonlyArray<ts.Diagnostic>
) {
  if (compilerDiagnostics.length > 0) {
    for (const diagnostic of compilerDiagnostics) {
      const message: string = ts.flattenDiagnosticMessageText(
        diagnostic.messageText,
        os.EOL
      );
      if (diagnostic.file) {
        const location: ts.LineAndCharacter = diagnostic.file.getLineAndCharacterOfPosition(
          diagnostic.start!
        );
        const formattedMessage: string = `${
          diagnostic.file.fileName
        }(${location.line + 1},${location.character +
          1}): [TypeScript] ${message}`;
        console.log(colors.red(formattedMessage));
      } else {
        console.log(colors.red(message));
      }
    }
  } else {
    console.log('No compiler errors or warnings.');
  }
}

export function dumpTSDocTree(docNode: tsdoc.DocNode, indent: string): void {
  let dumpText: string = `${indent}- ${docNode.kind}`;
  if (docNode instanceof DocNodeLeaf && docNode.excerpt) {
    const content: string = docNode.excerpt.content.toString();
    if (content.length > 0) {
      dumpText += ': ' + colors.cyan(JSON.stringify(content));
    }
  }
  console.log(dumpText);

  for (const child of docNode.getChildNodes()) {
    dumpTSDocTree(child, indent + '  ');
  }
}

export function sourceFilesFromEntries(
  program: ts.Program,
  entries: string[]
): ts.SourceFile[] {
  const sourceFiles: ts.SourceFile[] = entries
    .map(sf => program.getSourceFile(sf) as ts.SourceFile)
    .filter(Boolean);

  if (sourceFiles.length === 0) {
    throw new Error('Error retrieving source file');
  }
  return sourceFiles;
}
