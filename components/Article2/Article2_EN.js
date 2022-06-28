import React from 'react';
import { Box, Paper, Typography, Divider } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

// Article has ==> title, paragraphs, image
// paragraph has ==> heading, boolean indicating if the paragraph is abullet list or not, paragraph text
export default function Article2_EN({
  articleTitle,
  articleImage,
  //   articleSecondaryTitle,
  articleParagraphs,
}) {
  return (
    <Box className="article2-main-box">
      <Paper
        elevation={3}
        style={{ width: '100%', height: 'fit-content' }}
        className="article2-main-paper"
      >
        <div className="article2-main-div">
          <div className="article2-article-title-div">
            {articleTitle && (
              <Typography className="article2-article-title-text">
                {articleTitle}
              </Typography>
            )}
          </div>
          <div
            className={
              articleImage
                ? 'article2-article-body-div-with-image'
                : 'article2-article-body-div-without-image'
            }
          >
            {articleImage && (
              <div className="article2-article-image-div">
                <p>image here</p>
              </div>
            )}
            <div
              className={
                articleImage
                  ? 'article2-article-paragraphs-div-with image'
                  : 'article2-article-paragraphs-div-without-image'
              }
            >
              {articleParagraphs.map((paragraph, index) => {
                if (paragraph.isBullet) {
                  // return a bullet list
                  return (
                    <div className="article2-article-paragraph-div">
                      <Typography className="article2-article-bullet-list-heading">
                        {paragraph.listTitle}
                      </Typography>
                      <ul title={paragraph.listTitle}>
                        {paragraph.listItems.map((listItem) => (
                          <li key={uuidv4()}>{listItem}</li>
                        ))}
                      </ul>
                      {index !== articleParagraphs.length - 1 && (
                        <Divider className="article1-article-body-divider" />
                      )}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={uuidv4()}
                      className="article2-article-paragraph-div"
                    >
                      {paragraph.heading && (
                        <Typography className="article2-article-paragraph-heading-text">
                          {paragraph.heading}
                        </Typography>
                      )}
                      {paragraph.heading && <br />}
                      <Typography className="article2-article-body-text">
                        {paragraph.text}
                      </Typography>
                      {index !== articleParagraphs.length - 1 && (
                        <Divider className="article1-article-body-divider" />
                      )}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </Paper>
    </Box>
    // <Box classname="article1-main-box">
    //   <Paper
    //     elevation={3}
    //     style={{ width: '100%', height: 'fit-content' }}
    //     className="article1-main-paper"
    //   >
    //     <div className="article1-main-div">
    //       <div className="article1-article-title-div">
    //         {articleTitle && (
    //           <Typography className="article1-article-title-text-inner">
    //             {articleTitle}
    //           </Typography>
    //         )}
    //       </div>
    //       <div className="article1-article-body-div">
    //         {articleParagraphs &&
    //           articleParagraphs.map((paragraph, index) => (
    //             <div key={uuidv4()} className="article1-article-paragraph">
    //               {paragraph.heading && (
    //                 <Typography className="article1-article-paragraph-heading">
    //                   {paragraph.heading}
    //                 </Typography>
    //               )}
    //               {paragraph.heading && <br />}
    //               <Typography className="article1-article-body-text">
    //                 {paragraph.text}
    //               </Typography>
    //               {index !== articleParagraphs.length - 1 && (
    //                 <Divider className="article1-article-body-divider" />
    //               )}
    //             </div>
    //           ))}
    //       </div>
    //     </div>
    //   </Paper>
    // </Box>
  );
}
