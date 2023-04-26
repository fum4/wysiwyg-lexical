

import {
  assertHTML,
  assertSelection,
  expect,
  focusEditor,
  html,
  initialize,
  test,
  textContent,
} from '../utils/index.mjs';

test.describe('Placeholder', () => {
  test.beforeEach(({isCollab, page}) => initialize({isCollab, page}));
  test(`Displays a placeholder when no content is present`, async ({
    page,
    isRichText,
    isCollab,
  }) => {
    await focusEditor(page);
    const content = await textContent(page, '.Placeholder__root');
    if (isCollab) {
      expect(content).toBe('Enter some collaborative rich text...');
    } else if (isRichText) {
      expect(content).toBe('Enter some rich text...');
    } else {
      expect(content).toBe('Enter some plain text...');
    }

    await assertHTML(
      page,
      html`
        <p class="PlaygroundEditorTheme__paragraph"><br /></p>
      `,
    );
    await assertSelection(page, {
      anchorOffset: 0,
      anchorPath: [0],
      focusOffset: 0,
      focusPath: [0],
    });
  });
});
